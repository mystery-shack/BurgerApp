import React,{Component} from 'react';
import Auxilary from '../../hoc/Auxilary';
import Burger from '../../components/Burger/Burger';
import BurgerControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
 


const INGREDIENT_PRICES = {
    salad : 1,
    bacon : 1.5,
    cheese : 0.75,
    meat : 2
}
class BurgerBuilder extends Component{

    state = { 
        ingredients : {
            salad:0,
            bacon:0,
            cheese:0,
            meat:0
        },
        totalPrice :4,
        purchasable :false,
        purchasing:false
    }


    updatePurchasable = (newStateIngredient) =>{
        let sum = Object.keys(newStateIngredient).map((igkey) => {return newStateIngredient[igkey]}).reduce((sum,el) => {return sum+el},0);
        this.setState({purchasable : sum>0});
    }

    purschasingHandler = () =>{
        this.setState({purchasing:true})
    }

    purchaseCloseHandler = () => {
        this.setState({purchasing:false})
    }

    addIngredientHandler = (type) =>{
        let newCount = this.state.ingredients[type] + 1;
        let newStateIngredient = { ...this.state.ingredients};        
        newStateIngredient[type] = newCount;

        const priceAddition = INGREDIENT_PRICES[type];
        const newPrice = this.state.totalPrice + priceAddition;
        this.setState({ingredients: newStateIngredient,totalPrice:newPrice});
        this.updatePurchasable(newStateIngredient);
    }

    removeIngredientHandler = (type) =>{

        if(this.state.ingredients[type] >0)
        {
            let newCount = this.state.ingredients[type] - 1;
            let newStateIngredient = { ...this.state.ingredients};        
            newStateIngredient[type] = newCount;
            const priceSubtraction = INGREDIENT_PRICES[type];
            const newPrice = this.state.totalPrice - priceSubtraction;
            this.setState({ingredients: newStateIngredient,totalPrice:newPrice});
            this.updatePurchasable(newStateIngredient);
        }
        
        
    }   
    
    purchaseContinueHandler = () => {
        alert("you continue");
    }

    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0

        }


        return(
            <Auxilary>
                <Modal show={this.state.purchasing} ModalClosed = {this.purchaseCloseHandler}>
                    <OrderSummary TotalPrice = {this.state.totalPrice} ingredients={this.state.ingredients} purchaseCanceled = {this.purchaseCloseHandler} purchaseContinue = {this.purchaseContinueHandler}/>
                </Modal >
                <Burger ingredients = {this.state.ingredients}/>
                <BurgerControls ordered = {this.purschasingHandler} purchasable = {this.state.purchasable} price ={this.state.totalPrice} disabled={disabledInfo} ingredientRemoved = {this.removeIngredientHandler} ingredientAdded = {this.addIngredientHandler}/>
            </Auxilary>
            
        );
    }
}

export default BurgerBuilder;