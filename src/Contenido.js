import React from "react";
import ReactDOM from "react-dom";
import ListaItem from "./ListaItem";


class Contenido extends React.Component{
  constructor(props) {
    super(props);
    this.state={
		items: [],
		currentItem:{
			text:'',
			key:''
		}
	}
	this.handleInput = this.handleInput.bind(this);
	this.addItem = this.addItem.bind(this);
	this.borrarItem = this.borrarItem.bind(this);
  }

	handleInput(e){
		this.setState({
			currentItem:{
				text: e.target.value,
				key: Date.now()					//para que siempre la llave o indice vaya variando y no borre todo
			}
		})
		//console.log("currentItem", this.state.currentItem);
	}

	addItem(e){
		e.preventDefault();
		const newItem = this.state.currentItem;		//el ultimo item escrito
		if(newItem.text!==""){
			const newItems=[...this.state.items, newItem];  //destructuring para items  
			this.setState({
				items: newItems, 		//new items contiene todo lo ingresado
				currentItem:{
					text:'',
					key:''	
				}
			})
			//console.log("e", e);
			//console.log("newItem y newItems",newItem, newItems);			
		}	

	}

	borrarItem(key){
		const borraItem = this.state.items.filter(item => item.key!==key);
		this.setState({items:borraItem})
		console.log("borraItem", borraItem);	
	}


	render(){
			return(
				<div className="container">
				  <form id="formulario" onSubmit={this.addItem}>
	              <input type="text" placeholder="Ingrese su tarea" value={this.state.currentItem.text} onChange={this.handleInput}/> &nbsp; &nbsp;	                     
	              <br />
	              <ListaItem items={this.state.items} 
	              borrarItem={this.borrarItem}> </ListaItem>
	              <br />	              
	              </form>
	            </div>
				);
		}
}


export default Contenido;
