import React, { useEffect, useState } from "react";
import { RdsButton, RdsInput, RdsLabel, RdsSelectList, RdsTextArea, RdsTextEditor } from "../rds-elements";
import { RdsFileUploader } from "../rds-elements";
import { useTranslation } from "react-i18next";
 
export interface RdsCompBlogPostNewProps {
    blogPostData?: any;
    blogList: any;
    isEdit: boolean;
    offId: string;
    onSaveHandler: (data: any) => void;
    reset?: boolean;
}
 
const RdsCompBlogPostNew = (props: RdsCompBlogPostNewProps) => {
    const [postData, setBlogPostData] = useState(props.blogPostData);
    const [counter, setCounter] = useState(0);
    const [inputReset, setInputReset] = useState(false);
 
    useEffect(() => {
        setBlogPostData(props.blogPostData);
    }, [props.blogPostData]);

    useEffect(() => {
        setInputReset(!inputReset);
    }, [props.reset]);
 
    const handlerBlogDataChange = (val: any, key: any, isFile?: boolean) => {
        if (isFile) {
            const fileName = val?.name;
            setBlogPostData({ ...postData, [key]: val, fileName });
        } else {
            setBlogPostData({ ...postData, [key]: val });
        }
    };
 
    function emitSaveData(event: any) {
        event.preventDefault();
        setBlogPostData((prevData: typeof postData) => {
            const newData = {
                title: "",
                slug: "",
                description: "",
                content: "",
                tags: "",
                concurrencyStamp: "",
                blogId: null,
                file: [],
            }
            props.onSaveHandler && props.onSaveHandler(prevData);
            setInputReset(!inputReset);
            setCounter(prevCounter => prevCounter + 1);
            return newData;
        });
    }
    
    return (
        <>
            <div>
                <form>
                    <div className="custom-content-scroll">
                        <div className="from-group mb-3">
                            <RdsFileUploader
                                key={counter}
                                colorVariant="dark"
                                extensions="png, jpg, doc, pdf, ppt"
                                multiple={false}
                                size="large"
                                limit={1}
                                label="Cover Image"
                                validation={[
                                    {
                                        hint: "File size exceeds the limit",
                                        isError: false,
                                    },
                                ]}
                                onFileArray={(files) =>
                                    handlerBlogDataChange(files, "file", true)
                                }
                            />
                        </div>
                        <div className="form-group mb-3">
                            <RdsLabel
                                label="Blog Id"
                            />
                            <RdsSelectList
                                id="Fea"
                                placeholder="Select List"
                                selectItems={props.blogList}
                                selectedValue={postData?.blogId}
                                onChange={(item: any) => {
                                    handlerBlogDataChange(item.value, "blogId");
                                }}
                                dataTestId="twofactList"
                            ></RdsSelectList>
                        </div>
                        <div className="form-group">
                            <RdsInput
                                inputType="text"
                                size="medium"
                                required={true}
                                isDisabled={false}
                                label="Title"
                                readonly={false}
                                name="title"
                                placeholder="Enter Title"
                                onChange={(e) => {
                                    handlerBlogDataChange(e.target.value, "title");
                                }}
                                value={postData?.title}
                                dataTestId='title'
                                reset={inputReset}
                            ></RdsInput>
                        </div>
                        <div className="form-group">
                            <RdsInput
                                inputType="text"
                                required={true}
                                label="Slug"
                                name="slug"
                                placeholder="Enter Slug"
                                dataTestId='slug'
                                onChange={(e) => {
                                    handlerBlogDataChange(e.target.value, "slug");
                                }}
                                value={postData?.slug}
                                reset={inputReset}
                            ></RdsInput>
                        </div>
                        {props.isEdit && <div className="form-group">
                            <RdsInput
                                inputType="text"
                                required={true}
                                label="Concurrency Stamp"
                                name="concurrentMode"
                                placeholder=""
                                onChange={(e) => {
                                    handlerBlogDataChange(e.target.value, "concurrencyStamp");
                                }}
                                value={postData?.concurrencyStamp}
                                dataTestId='concurrency-stamp'
                            ></RdsInput>
                        </div>}
                        <div className="form-group mb-3">
                            <RdsTextArea
                                label="Short Description"
                                placeholder="Enter Description"
                                onChange={(e) => {
                                    handlerBlogDataChange(e.target.value, "description");
                                }}
                                value={postData?.description}
                                rows={3}
                                dataTestId='shord-desc'
                            />
                        </div>
                        <div className="form-group mb-2">
                            <RdsTextEditor value={postData?.content} onChange={(e: any) => handlerBlogDataChange(e, "content")} />
                        </div>
                        <div className="form-group mb-5 mb-lg-0">
                            <RdsInput
                                inputType="text"
                                required={true}
                                label="Tags"
                                placeholder="Enter Tag"
                                dataTestId='tag'
                                onChange={(e) => {
                                    handlerBlogDataChange(e.target.value, "tags");
                                }}
                                value={postData?.tags}
                                reset={inputReset}
                            ></RdsInput>
                        </div>
                    </div>
 
                    <div className="d-flex flex-column-reverse flex-lg-row ps-4 flex-md-column-reverse flex-row flex-xl-row flex-xxl-row footer-buttons gap-2 mt-3 pb-3">
                        {!props.isEdit ? <>
                            <RdsButton
                                class="me-2"
                                tooltipTitle={""}
                                type={"button"}
                                label="Cancel"
                                colorVariant="outline-primary"
                                size="small"
                                databsdismiss="offcanvas"
                            ></RdsButton>
                            <RdsButton
                                class="me-2"
                                type="submit"
                                label="Save As Draft"
                                size="small"
                                isOutline={true}
                                colorVariant="primary"
                                databsdismiss="offcanvas"
                                databstoggle="offcanvas"
                                databstarget={`#${props?.offId}`}
                                dataTestId='save'
                                onClick={(e: any) => emitSaveData(e)}
                            ></RdsButton>
                            <RdsButton
                                class="me-2"
                                label="Publish"
                                type="submit"
                                isOutline={false}
                                colorVariant="primary"
                                databsdismiss="offcanvas"
                                databstoggle="offcanvas"
                                databstarget={`#${props?.offId}`}
                                size="small"
                                onClick={(e: any) => emitSaveData(e)}
                                dataTestId='submit'
                            ></RdsButton></> : <>
                            <RdsButton
                                class="me-2"
                                tooltipTitle={""}
                                type={"button"}
                                label="Cancel"
                                colorVariant="outline-primary"
                                size="small"
                                databsdismiss="offcanvas"
                            ></RdsButton>
                            <RdsButton
                                class="me-2"
                                label="Save"
                                type="submit"
                                isOutline={false}
                                colorVariant="primary"
                                size="small"
                                databsdismiss="offcanvas"
                                databstoggle="offcanvas"
                                databstarget={`#${props?.offId}`}
                                onClick={(e: any) => emitSaveData(e)}
                                dataTestId='submit'
                            ></RdsButton>
                        </>}
                    </div>
                </form>
            </div>
 
        </>
    );
};
 
 
export default RdsCompBlogPostNew;