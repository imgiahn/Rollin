import React from 'react';
import AddPaperForm from './AddPaperForm';

const SelectUption = () => {
    const [go, setGo] = React.useState(false);

    return go ? (
        <AddPaperForm />
    ) : (
        <div
            className="container"
            style={{
                margin: 100,
            }}
        >
            <div id="content" className="center-block">
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{
                        margin: 50,
                        height: 200,
                    }}
                    onClick={() => setGo(true)}
                >
                    편지쓰기
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    style={{
                        margin: 50,
                        height: 200,
                    }}
                >
                    선물보내기
                </button>
            </div>
        </div>
    );
};

export default SelectUption;
