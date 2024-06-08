import React from 'react'

class Class extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }


    render() {
        return (
            <div className='mt-10 mx-auto text-center'>
                <p className='mb-5 text-xl font-bold'>Count: {this.state.count}</p>
                <button type="button" class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-base px-5 py-2.5 text-center me-2 mb-2"  onClick={() => this.setState({ count: this.state.count + 1 })}>   Increment</button>
                
            </div>
        );
    }
}

export default Class