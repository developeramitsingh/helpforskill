import {LOAD_EXAM, EXAM_LOADING} from "../actionTypes/actionTypes"

const initstate = {
    isLoaded: false,

	testData: {
            "_id": "5e9053681fc7801b9ccb1813",
            "test_id": "NICTechnicalAExam_2020",
            "test_name": "NIC Technical A Exam 2020",
            "test_set": 1,
            "total_ques": 120,
            "total_marks": 100,
            "negative_marks": 0.25,
            "time": "3 Hours",
            "__v": 0,

            "Sections": [
                {
                    "Section_A": [
                        {
                            "qno": 1,
                            "subject": "English",
                            "qus": "Select the noun.",
                            "options": [
                                "verb",
                                "noun",
                                "adjective",
                                "pronoun"
                            ],
                            "ans": [
                                1
                            ],
                            "marks": 1
                        },
                        {
                            "qno": 2,
                            "subject": "Quantative Aptitude",
                            "qus": "add the followig",
                            "options": [
                                "verb",
                                "noun",
                                "adjective",
                                "pronoun"
                            ],
                            "ans": [
                                0
                            ],
                            "marks": 1
                        }
                    ]
                },
                {
                    "Section_B": [
                        {
                            "qno": 1,
                            "subject": "Technical",
                            "qus": "Select the Technical adjective.",
                            "options": [
                                "verb",
                                "noun",
                                "adjective",
                                "pronoun"
                            ],
                            "ans": [
                                2
                            ],
                            "marks": 1
                        },
                        {
                            "qno": 2,
                            "subject": "Technical",
                            "qus": "Select the Technical",
                            "options": [
                                "verb",
                                "noun",
                                "adjective",
                                "pronoun"
                            ],
                            "ans": [
                                3
                            ],
                            "marks": 1
                        }
                    ]
                }
            ],
            
        }    
}


const TestLoadReducer = (state=initstate, action)=>{
	switch(action.type){
		case LOAD_EXAM:
            return{
                ...state,
                isLoaded:true,
                testData:action.payload
            }
        case EXAM_LOADING:
            return{
                ...state,
                isLoaded:false
            }

	}

    return state
}

export default TestLoadReducer