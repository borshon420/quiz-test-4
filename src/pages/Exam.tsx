import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { UserInfo } from './Home';
import { getQuestionByLang, Question } from '../json/Question';
import { Button } from '@mui/material';

interface Ans {
    id: number,
    options: string[]
}

const Exam: React.FC = () => {
    const {state} = useLocation();
    const user = state as UserInfo;

    const history = useHistory();

    const [currentQ, setCurrentQ] = useState<number>(0);
    const [ansList, setAnsList] = useState<Ans[]>([]);
    
    const questionList: Question[] = getQuestionByLang(user.lang);
    const question: Question = questionList[currentQ];

    const handleOptionPick = (option: string, checked?: boolean) => {
        const find = ansList.find((ans) => ans.id === question.id);
        if(find){
            if(question.ans.length > 1){
                const _ansList = ansList.map((ans) => {
                    if(ans.id === question.id){
                        if(checked){
                            ans = {id: question.id, options: [...ans.options, option]}
                        } else {
                            let _options = ans.options.filter((op) => op !== option);
                            ans = {id: question.id, options: _options}
                        }
                    }
                    return ans;
                });
                setAnsList(_ansList);
            } else {
                const _ansList = ansList.map((ans) => {
                    if(ans.id === question.id){
                        ans = {id: question.id, options: [option]}
                    }
                    return ans;
                });
                setAnsList(_ansList);
            } 
        } else {
            const _ans = {id: question.id, options:[option]}
            setAnsList([...ansList, _ans]);
        }
    }

    const isAns = (option: string) => {
        const ans = ansList.find((ans) => ans.id === question.id)

        if(!ans) return false;
        return !!ans.options.find((op) => op === option);
    }

    const isQuestionAns = (questionId: number) => {
        const ans = ansList.find((ans) => ans.id === questionId)

        if(!ans) return false;
        return ans.options.length > 0;
    }

    const handleResult = () => {
        let count: number = 0;
        ansList.forEach((ans) => {
            for(let q of questionList){
                if(ans.id === q.id){
                    if(JSON.stringify(ans.options) === JSON.stringify(q.ans)){
                        count++;
                    }
                    break;
                }
            }
        });
        history.push("/result",{ansCount: count, count: questionList.length});
    }
    return (
        <div>
            <div>
                <h2>Language: {user.lang}</h2>
                {getQuestionByLang(user.lang).map((question, index)=> <span
                key={index}
                style={{
                    display: "inline-block",
                    margin: "4px",
                    width: "50px",
                    height: "50px",
                    lineHeight: "50px",
                    borderRadius: "50%",
                    backgroundColor: `${isQuestionAns(question.id) ? "red": "gray"}`,
                    cursor: "pointer"
                }}
                onClick={()=> setCurrentQ(index)}
                >
                    {index + 1}
                </span>)}
            </div>
            <div>
                <h3>{question.title}</h3>
                {question.options.map((option, index) => 
                <div key={index}>
                    <label key={option}>
                        <div>
                            {index + 1}
                            {question.ans.length > 1 ? <input
                                type="checkbox"
                                checked={isAns(option)}
                                onChange={(e) => handleOptionPick(option, e.target.checked)}                            
                            /> : <input
                                type="radio"
                                checked={isAns(option)}
                                onChange={() => handleOptionPick(option)}
                            />}
                            {option}
                        </div>
                    </label>
                </div>)}
            </div>
            {currentQ === questionList.length - 1 && <Button variant="contained" sx={{m: 2}} onClick={handleResult}>Submit</Button>}
        </div>
    );
};

export default Exam;