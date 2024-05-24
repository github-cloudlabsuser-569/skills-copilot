import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const MarkdownEditor = () => {
    const [markdown, setMarkdown] = useState('Type markdown here');

    const handleMarkdownChange = (event) => {
        setMarkdown(event.target.value);
    };

    return (
        <div>
            <textarea value={markdown} onChange={handleMarkdownChange} />

            <div>
                <ReactMarkdown>{markdown}</ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownEditor;
const sentence = "take a sentence as input";
const reversedSentence = sentence.split(" ").reverse().join(" ");
const capitalizedSentence = reversedSentence.charAt(0).toUpperCase() + reversedSentence.slice(1);

console.log(capitalizedSentence);
console.log(data);
data.forEach((arr) => {
    arr.forEach((obj) => {
        console.log(obj.name);
    });
});
const names = data.flatMap(arr => arr.map(obj => obj.name));
console.log(names);