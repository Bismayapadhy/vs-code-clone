import React from 'react';
import Sidebar from './components/Sidebar';
import CodeEditor from './components/Editor';
import StatusBar from './components/StatusBar';
import Terminal from './components/Terminal';

const App = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
            <div style={{ display: "flex", flex: 1 }}>
                <Sidebar />
                <CodeEditor />
            </div>
            <Terminal />
            <StatusBar />
        </div>
    );
};

export default App;
