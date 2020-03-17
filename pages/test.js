import React from 'react';
import Head from "next/head";


class Test extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Test</title>
                </Head>
                <main>
                    <button className="btn btn-primary">work</button>
                    <h2>hello</h2>
                </main>
            </div>
        )
    }
}

export default Test;