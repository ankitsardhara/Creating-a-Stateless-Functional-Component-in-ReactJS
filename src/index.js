import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoItem from './component/TodoItem.js'


class TodoList extends React.Component {

	constructor(){
		super();
        this.changeStatus=this.changeStatus.bind(this);
		this.state={
			tasks:[{
                name:'PHP',
                completed:false
            },
            {
                name:'NodeJS',
                completed:false
            },
            {
                name:'ReactJS',
                completed:false
            }
            ]
		} 
	}

    changeStatus(index){
    var tasks=this.state.tasks;
    var task=this.state.tasks[index];
    task.completed=!task.completed;
    this.setState({
        tasks:tasks 
    });
    }
        render() {

        	return (
        	<ul  >
        	{
        		this.state.tasks.map((task,index)=>{
                   return (<TodoItem key={task.name} index={index} clickHandler={this.changeStatus} detail={task} />)
        		})
        	}
        	</ul>
            
            )   
        }
    }








        ReactDOM.render( <TodoList / > , document.getElementById('root'))