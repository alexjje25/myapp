import React, { Component } from 'react';

import './Main.css';
//form
import { FaEdit, FaPlus, FaWindowClose }  from 'react-icons/fa';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  // informaçoes vindo do onSubmit
  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();
     // se o indice dessa nova for diferete de -1 ele da um retorno
    if(tarefas.indexOf(novaTarefa) !== -1) return;
   //caso ao contrario cria uma nova tarefa
    const novasTarefas = [...tarefas];

    if(index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
      });
    }
  }


    handleChange = (e) => {
      this.setState({
        novaTarefa: e.target.value,
      });
    }

    handleEdit = (e, index) => {
      const { tarefas } = this.state;
      this.setState ({
        index,
        novasTarefas: tarefas[index],
      });
    }

    handleDelete = (e, index) => {
      const { tarefas } = this.state;
      const novasTarefas = [...tarefas];
      novasTarefas.splice(index, 1);

      this.setState({
        tarefas: [...novasTarefas],
      });
    }

    render() {
      const { novaTarefa, tarefas } = this.state;

      return (
        <div className='main'>
          <h1>Lista de Tarefas</h1>

          <form onSubmit={this.handleSubmit} action="#" className='form'>

            <input
            onChange={this.handleChange}
            type="text"
            value={novaTarefa}

            />
            <button type='submit'>
              <FaPlus />
            </button>

          </form>

          <ul className='tarefas'>

          {tarefas.map((tarefa) => (
          <li key={tarefa}>
          {tarefa}
          <span>
            {/*colocando a função do botao de editar */}
            <FaEdit
             onClick={this.handleEdit}
             className="edit"
             />
             {/*colocando a função do botao de excluir */}
            <FaWindowClose
            onClick={this.handleDelete}
            className="delete"
            />
          </span>
          </li>
          ))}

          </ul>

        </div>
      );
    }
  }

