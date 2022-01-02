export interface Question {
    id: number,
    title: string,
    options: string[],
    ans: string[],
    lang: string
};

export const qList: Question[] = [
    {
        id: 1,
        title: "Which of the following is the correct name of React.js?",
        options: [
          "React",
          "React.js",
          "ReactJs",
          "All of the above",
        ],
        ans: ["All of the above"],
        lang: "ReactJS",
      },
      {
        id: 2,
        title: "Which language we can use for reactJS?",
        options: ["Angular", "Javascript", "Python", "Typescript"],
        ans: ["Javascript", "Typescript"],
        lang: "ReactJS",
      },
      {
        id: 3,
        title: "Which of the following acts as the input of a class-based component?",
        options: [
          "Class",
          "Factory",
          "Render",
          "Props",
        ],
        ans: ["Props"],
        lang: "ReactJS",
      },
      {
        id: 4,
        title: "Which of the following keyword is used to create a class inheritance?",
        options: ["Create", "Inherits", "Extends", "This"],
        ans: ["Extends"],
        lang: "ReactJS",
      },
      {
        id: 5,
        title: "What are the two ways to handle data in React?",
        options: [
          "State & Props",
          "Services & Components",
          "State & Services",
          "State & Component",
        ],
        ans: ["State & Props"],
        lang: "ReactJS",
      },
      {
        id: 6,
        title: " What are the variable scopes available in TypeScript?",
        options: [
          "Global Scope",
          "Class Scope",
          "Local Scope",
          "All of the above",
        ],
        ans: ["All of the above"],
        lang: "TypeScript",
      },
      {
        id: 7,
        title: "Which object oriented terms are supported by Typescript?",
        options: [
          "Modules",
          "Classes",
          "Interfaces",
          "None of the above",
        ],
        ans: ["Modules", "Interfaces"],
        lang: "TypeScript",
      },
      {
        id: 8,
        title: " What are the components of TypeScript?",
        options: [
          "TypeScript Language",
          "TypeScript Compiler",
          "TypeScript Language Service",
          "All of these",
        ],
        ans: ["All of these"],
        lang: "TypeScript",
      },
      {
        id: 9,
        title: "What are the types of access modifiers supported by TypeScript?",
        options: ["Public", "Private", "Protected", "All of these"],
        ans: ["All of these"],
        lang: "TypeScript",
      },
      {
        id: 10,
        title: "When was the first time TypeScript was made public?",
        options: [
          "December 2012",
          "October 2012",
          "October 2013",
          "November 2013",
        ],
        ans: ["October 2012"],
        lang: "TypeScript",
      },
] 

export const getQuestionByLang = (lang: string): Question[] => {
    return qList.filter(q => q.lang === lang);
}