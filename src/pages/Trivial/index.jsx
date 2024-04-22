import React, { useState, useEffect } from 'react';
import axios from 'axios';
import sass from './trivia.module.scss'
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function Trivia() {
    const [questions, setQuestions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [corret, setCorrect] = useState(0)
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [isTrue, setIsTrue] = useState(true);

    useEffect(() => {
        const fetchQuestions = async () => {
            try {
                const response = await axios.get('https://the-trivia-api.com/api/questions', {
                    params: {
                        apiKey: 'YOUR_API_KEY',  // Replace with your actual API key
                        limit: 5 // Set the number of questions you want
                    }
                });
                setQuestions(response.data);
                setLoading(false);
            } catch (error) {
                setError('Failed to fetch questions: ' + error.message);
                setLoading(false);
            }
        };

        fetchQuestions();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const checkAnswer = (questionId, answer, correctAnswer) => {
        if (selectedAnswers[questionId]) {

            return;
        }

        setSelectedAnswers(prevState => ({
            ...prevState,
            [questionId]: true
        }));

        if (answer === correctAnswer) {
            setCorrect((prev) => prev + 1)
            setIsTrue(true)
        } else {
            setIsTrue(false)
        }
    }

    console.log(questions);

    return (
        <div className={sass.trivia}>
            <h4>Questions</h4>
            <ul>
                {questions.map((question, index) => (
                    <li key={index}>
                        <h1>{question.question}</h1>
                        {/* <h3>{question.correctAnswer}</h3> */}
                        <ul>
                            {
                                shuffleArray(question.incorrectAnswers.concat(question.correctAnswer)).map((item) => (
                                    <li key={item} onClick={() => checkAnswer(question.id, item, question.correctAnswer)}><button style={{
                                        backgroundColor: selectedAnswers[question.id] && item === question.correctAnswer ?
                                            'green' :
                                            selectedAnswers[question.id] && !isTrue && item === question.correctAnswer ?
                                                'green' :
                                                selectedAnswers[question.id] && !isTrue && item !== question.correctAnswer ?
                                                    'red' :
                                                    null
                                    }}>{item}</button></li>
                                ))
                            }
                        </ul>
                        {/* <h4>{question.incorrectAnswers}</h4> */}
                    </li>
                ))}
            </ul>
            <h2>Correct answers: {corret}</h2>
        </div>
    );
}

export default Trivia;