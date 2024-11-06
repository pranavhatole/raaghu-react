import React, { useState, useRef } from "react";
import './rds-ai-prompt-box.css';
import RdsDropdownList from "../rds-dropdown-list/rds-dropdown-list";
import RdsIcon from "../rds-icon/rds-icon";

export interface RdsAiPromptBoxProps {
    prefilledprompt: any;
    aiButtons: any;
    selectScreen: any;
    colorVariant: string;
    onClick?: ($event: React.MouseEvent<HTMLLIElement>, val: string) => void;
}

const RdsAiPromptBox = (props: RdsAiPromptBoxProps) => {
    const [selectedImages, setSelectedImages] = useState<string[]>([]);
    const [inputText, setInputText] = useState<string>("");
    const [outputText, setOutputText] = useState<string>("");
    const [outputImages, setOutputImages] = useState<string[]>([]);
    const [chatHistory, setChatHistory] = useState<{ type: 'input' | 'output', text: string, images: string[] }[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const onClickHandler = (e: any, val: any) => {
        if (props.onClick) {
            props.onClick(e, val);
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const filesArray = Array.from(event.target.files);
            const newImages: string[] = [];

            filesArray.forEach(file => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    if (e.target?.result) {
                        newImages.push(e.target.result as string);
                        if (newImages.length === filesArray.length) {
                            setSelectedImages(prevImages => [...prevImages, ...newImages]);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });

            // Reset the file input value
            if (fileInputRef.current) {
                fileInputRef.current.value = "";
            }
        }
    };

    const removeImage = (index: number) => {
        setSelectedImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const handlePromptText = (question: any) => {
        setInputText(question);
    };

    const handleGenerateButtonClick = () => {
        // Add input to chat history
        setChatHistory(prevHistory => [...prevHistory, { type: 'input', text: inputText, images: selectedImages }]);

        // Simulate generating output
        setTimeout(() => {
            const generatedText = `Generated response for: ${inputText}`;
            setOutputText(generatedText);
            setOutputImages(selectedImages);
            setChatHistory(prevHistory => [...prevHistory, { type: 'output', text: generatedText, images: selectedImages }]);
            console.log("Generate button clicked");
        }, 1000); // Simulate delay for generating response

        // Clear input and selected images
        setInputText("");
        setSelectedImages([]);
    };

    const handleButtonClick = (button: any) => {
        console.log(`Button ${button.id} clicked`);
        // Add your button click logic here
    };

    return (
        <div className="container">
            {/* Chat History Section */}
            <div className="chat-history form-controls">
                {chatHistory.map((entry, index) => (
                    <div key={index} className={`chat-entry ${entry.type} `}>
                        <span className="bg-primary p-3 text-light rounded">{entry.text}</span>
                        <div className="chat-images">
                            {entry.images.map((image, imgIndex) => (
                                <img key={imgIndex} src={image} alt={`Chat ${entry.type} ${imgIndex}`} className="chat-image" />
                            ))} 
                        </div>
                    </div>
                ))}
            </div>

            <div className={`prefilled-prompts`}>
                {props.prefilledprompt.map((prompt: { question: string }, index: number) => (
                    <button key={index} className={`form-controls prompt-button text-primary border-primary`} onClick={(e) => handlePromptText((e.target as HTMLButtonElement).value)} value={prompt.question}>{prompt.question}</button>
                ))}
            </div>

            <div className="main-content">
                <div className="button-column mt-1">
                    <div className="button-row">
                        <button className={`form-controls sidebar-button me-2 text-primary border-primary`} onClick={() => handleButtonClick({ id: '1' })}>1</button>
                        <button className={`form-controls sidebar-button me-2 text-primary border-primary`} onClick={() => handleButtonClick({ id: '2' })}>2</button>
                    </div>
                    <div className="button-row mt-2">
                        <button className={`form-controls sidebar-button me-2 text-primary border-primary`} onClick={() => handleButtonClick({ id: '4' })}>4</button>
                        <button className={`form-controls sidebar-button me-2 text-primary border-primary`} onClick={() => handleButtonClick({ id: 'Chat' })}>
                            <RdsIcon
                                name="newchat"
                                height="33px"
                                width="24px"
                                colorVariant="danger"
                                fill={false}
                                stroke={false}
                            />
                        </button>
                    </div>
                </div>

                <div className="input-column">
                    <div className="input-wrapper">
                        <div className="input-with-image">
                            <textarea
                                className={`form-controls input-box text-${props.colorVariant} border-${props.colorVariant}`}
                                placeholder="Placeholder Text"
                                value={inputText}
                                onChange={(e) => setInputText(e.target.value)}
                            />
                            {selectedImages.map((image, index) => (
                                <div key={index} className="image-preview">
                                    <img src={image} alt={`Selected ${index}`} className="selected-image" />
                                    <button className="remove-image-button" onClick={() => removeImage(index)}>✖</button>
                                </div>
                            ))}
                        </div>
                        <label htmlFor="file-upload" className={`file-upload-label`}>
                            <RdsIcon
                                name="attachment"
                                height="20px"
                                width="20px"
                                colorVariant={props.colorVariant}
                                fill={false}
                                stroke={true}
                            />
                        </label>
                        <input
                            id="file-upload"
                            type="file"
                            accept="image/*"
                            multiple
                            className="file-input"
                            style={{ display: 'none' }}
                            onChange={handleImageChange}
                            ref={fileInputRef}
                        />
                    </div>
                </div>
                <div className="action-column mt-1">
                    <button disabled={!inputText && selectedImages.length === 0} className={`btn form-controls generate-button mb-1 btn-primary bg-primary text-white`} onClick={handleGenerateButtonClick}>
                        <RdsIcon
                            name="aigenerate"
                            height="20px"
                            width="20px"
                            colorVariant="light"
                            fill={false}
                            stroke={true}
                        />
                        Generate
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RdsAiPromptBox;