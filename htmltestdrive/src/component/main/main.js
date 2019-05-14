import React, { Component } from 'react';

class main extends Component {
    state = {
        click_count : 0
    }

    render() {
        return (
            <div>
            <p>현재 클릭한 횟수는 {this.state.click_count} 입니다.</p>
             <button onClick={()=>this.setState({click_count: 1})}>
             증가
             </button>
             <button onClick={()=>this.setState({click_count: 0})}>
             감소
             </button>
          </div> 
        );
    }
    
}

export default main;