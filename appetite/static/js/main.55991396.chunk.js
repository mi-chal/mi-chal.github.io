(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports={"recipe-name":"AddRecipe_recipe-name__1Aljg","ingredients-heading":"AddRecipe_ingredients-heading__1N-rE","add-ingredient":"AddRecipe_add-ingredient__1jP9w","ingredient-field":"AddRecipe_ingredient-field__1xrex","add-ingredient-button":"AddRecipe_add-ingredient-button__4RQ8B","delete-btn":"AddRecipe_delete-btn__uRKw2","ingredients-list":"AddRecipe_ingredients-list__PHjcl",ingredient:"AddRecipe_ingredient__1Eack","notes-heading":"AddRecipe_notes-heading__P4yIO",notes:"AddRecipe_notes__mhJAO","save-button":"AddRecipe_save-button__55ErB","clear-button":"AddRecipe_clear-button__g4U2O"}},,,,function(e,t,n){e.exports={meal:"MealPlan_meal__3kiEr","header-container":"MealPlan_header-container__cK4iD","meal-heading":"MealPlan_meal-heading__1lwXZ","delete-button":"MealPlan_delete-button__3N6yE",dish:"MealPlan_dish__34sTn",select:"MealPlan_select__VdcwD",hint:"MealPlan_hint__kY6VJ"}},,,function(e,t,n){e.exports={meal:"MealRecipes_meal__7cup9",heading:"MealRecipes_heading__1Dggq","add-recipe-button":"MealRecipes_add-recipe-button__s5hF0","delete-btn":"MealRecipes_delete-btn__z_0Me",recipe:"MealRecipes_recipe__1__bk","recipe-container":"MealRecipes_recipe-container__1cuxz",recipes:"MealRecipes_recipes__10uil"}},,,function(e,t,n){e.exports={container:"Navbar_container__3HBHC",logo:"Navbar_logo__2r3Uc","logo-span":"Navbar_logo-span__3nN_Y",navbar:"Navbar_navbar__Pu4lg","nav-button":"Navbar_nav-button__HS75s","active-link":"Navbar_active-link__3AO4O"}},function(e,t,n){e.exports={"recipe-heading":"ViewRecipe_recipe-heading__1Vtpg","ingredients-heading":"ViewRecipe_ingredients-heading__7u12d","ingredients-list":"ViewRecipe_ingredients-list__2iKkm",ingredient:"ViewRecipe_ingredient__144zi","notes-heading":"ViewRecipe_notes-heading__2v_AA",notes:"ViewRecipe_notes__rGjzi"}},function(e,t,n){e.exports={timer:"Timer_timer__2YV5Y",inputs:"Timer_inputs__1XGz4",buttons:"Timer_buttons__z51Gf","start-button":"Timer_start-button__1dQGZ","stop-button":"Timer_stop-button__2intJ","reset-button":"Timer_reset-button__1aY18"}},,,function(e,t,n){e.exports={slider:"Slider_slider__3zhFx",slide:"Slider_slide__2VrA_","slide-text":"Slider_slide-text__3qTLr",entering:"Slider_entering__nlMjQ",slideIn:"Slider_slideIn__3moxO",exiting:"Slider_exiting__2OxLB",slideOut:"Slider_slideOut__1aeqx"}},function(e,t,n){e.exports={"daily-list":"DailyGroceryList_daily-list__2ybuT","day-heading":"DailyGroceryList_day-heading__1PXbr","ingredient-container":"DailyGroceryList_ingredient-container__3Re6T","ingredient-checkbox":"DailyGroceryList_ingredient-checkbox__1PD7v","delete-button":"DailyGroceryList_delete-button__1TxF_",hint:"DailyGroceryList_hint__2Zhbg"}},,,,,,function(e,t,n){e.exports={"display-modal":"Modal_display-modal__2gm8i","modal-main":"Modal_modal-main__3y-ws","close-button":"Modal_close-button__1YBVU"}},function(e,t,n){e.exports={button:"Button_button__3AwBs","button--positive":"Button_button--positive__1kHEC","button--negative":"Button_button--negative__3_eYU","button--neutral":"Button_button--neutral__2MK44"}},function(e,t,n){e.exports={day:"DayPlan_day__37GJH",meals:"DayPlan_meals__3s615","day-heading":"DayPlan_day-heading__2iJOv"}},function(e,t,n){e.exports={heading:"TimeUnit_heading__1PCh_",container:"TimeUnit_container__3Kn78","time-unit":"TimeUnit_time-unit__TrOzP"}},function(e,t,n){e.exports={heading:"TimeUnitInput_heading__2dydJ",container:"TimeUnitInput_container__qTQkO","time-input":"TimeUnitInput_time-input__3Yd_s"}},,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/cook-book.9e9faf9b.jpeg"},function(e,t,n){e.exports=n.p+"static/media/meal-plan.6724ffb2.jpeg"},function(e,t,n){e.exports=n.p+"static/media/grocery-list.090a5c6d.jpeg"},function(e,t,n){e.exports=n.p+"static/media/timer.87d88a1e.jpeg"},function(e,t,n){e.exports={"error-message":"WithError_error-message__pF6we"}},function(e,t,n){e.exports={cookbook:"Cookbook_cookbook__1QTgl"}},function(e,t,n){e.exports={"meal-planning":"MealPlanning_meal-planning__3sHA8"}},function(e,t,n){e.exports={"grocery-list":"GroceryList_grocery-list__3drX9"}},function(e,t,n){e.exports=n(82)},,,,,,,,,,function(e,t,n){},,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(16),s=n(13),c=n(41),o=n(36),l=n.n(o),d=n(10),u=n(9),m=function(e){return JSON.parse(localStorage.getItem(e))},h=function(e,t){return localStorage.setItem(e,JSON.stringify(t))},p=function(){return m("recipes")||[]},g=function(e){var t=p(),n=Object(u.a)(t).concat([e]);h("recipes",n)},b=function(e){return h("recipes",e)},_=function(e){return"".concat(e,"-").concat((new Date).getTime())},v="ADD_RECIPE",f="DELETE_RECIPE",y=p();var E=function(){return m("dishes")||[]},k=function(e){var t=E(),n=Object(u.a)(t).concat([e]);h("dishes",n)},N=function(e){return h("dishes",e)},O="ADD_DISH",x="UPDATE_DISHES",j=E();var I=Object(r.combineReducers)({recipes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return Object(u.a)(e).concat([t.newRecipe]);case f:return t.newRecipes;default:return e}},dishes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(u.a)(e).concat([t.newDish]);case x:return t.newDishes;default:return e}}}),C=(n(61),n(2)),R=n(3),w=n(6),S=n(4),D=n(5),T=n(1),M=n(11),A=n(28),P=n.n(A),L=n(18),U=n.n(L);var V=function(e){return i.a.createElement("nav",{className:U.a.container},i.a.createElement("div",{className:U.a.logo},"app",i.a.createElement("span",{className:U.a["logo-span"]},"etite")),i.a.createElement("div",{className:U.a.navbar},e.links.map(function(t){return i.a.createElement("button",{type:"button",key:t.id,className:P()(U.a["nav-button"],Object(M.a)({},U.a["active-link"],e.currentLinkId===t.id)),onClick:function(){return e.onLinkClick(t.id)}},t.text)})))},B=n(42),G=n.n(B),H={home:"home",cookbook:"cookbook",planning:"meal planning",groceryList:"grocery list",timer:"kitchen timer"},J={cookbook:"All recipes in one place",planning:"Plan your meals easily",groceryList:"Grab your grocery list",timer:"Enjoy cooking time"},Y={buttons:{delete:"X",plus:"+"}},z={add:"Add Recipe"},W={inputs:{recipeName:"Name of the recipe",notes:"Optional"},recipe:{ingredients:"Ingredients",notes:"Notes"},buttons:{add:"Add Ingredient",save:"Save Recipe",clear:"Clear",delete:"X"}},X={hours:"Hours",minutes:"Minutes",seconds:"Seconds"},F={start:"Start",stop:"Stop",reset:"Reset"},K="Ingredient name must contain 2-20 characters",Q="Recipe name must contain 3-30 characters",q="Your recipe should have at least 1 ingredient",Z="Save some recipes in cookbook to plan this meal",$="You didn't plan any meals for this day",ee=n(43),te=n.n(ee),ne=n(44),ae=n.n(ne),ie=n(45),re=n.n(ie),se=n(46),ce=n.n(se),oe=n(23),le=n.n(oe);function de(e){return i.a.createElement("div",{className:le.a.slide,style:{backgroundImage:"url(".concat(e.imgSrc,")")}},e.text&&i.a.createElement("div",{className:le.a["slide-text"]},e.text))}de.defaultProps={text:""};var ue=de,me=[{id:1,imgSrc:te.a,text:J.cookbook,visible:!0},{id:2,imgSrc:ae.a,text:J.planning,visible:!1},{id:3,imgSrc:re.a,text:J.groceryList,visible:!1},{id:4,imgSrc:ce.a,text:J.timer,visible:!1}],he=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).updateSlideIndex=n.updateSlideIndex.bind(Object(T.a)(Object(T.a)(n))),n.state={currentSlideIndex:0,slides:me},n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"componentDidMount",value:function(){this.interval=window.setInterval(this.updateSlideIndex,5e3)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"updateSlideIndex",value:function(){this.setState(function(e){var t=e.currentSlideIndex===me.length-1?0:e.currentSlideIndex+1,n=e.slides.map(function(e,n){return Object(d.a)({},e,{visible:n===t})});return{currentSlideIndex:t,slides:n}})}},{key:"render",value:function(){return i.a.createElement("section",{className:le.a.slider},this.state.slides.map(function(e){return i.a.createElement("div",{key:e.id},i.a.createElement(G.a,{in:e.visible,timeout:1e3,unmountOnExit:!0},function(t){return i.a.createElement("div",{className:le.a[t]},i.a.createElement(ue,{imgSrc:e.imgSrc,text:e.text}))}))}))}}]),t}(a.Component);var pe=function(){return i.a.createElement("div",null,i.a.createElement(he,null))},ge=n(30),be=n.n(ge),_e=n(31),ve=n.n(_e),fe="negative",ye=function(e){return ve.a["button--".concat(e)]},Ee=function(e){switch(e){case"positive":return ye("positive");case fe:return ye("negative");default:return ye("neutral")}};function ke(e){return i.a.createElement("button",{type:"button",onClick:e.onClick,className:P()(ve.a.button,Ee(e.type),e.className)},e.text)}ke.defaultProps={className:ve.a.button,type:"neutral",text:""};var Ne=ke;function Oe(e){return e.shouldShow&&i.a.createElement("div",{className:be.a["display-modal"]},i.a.createElement("div",{className:be.a["modal-main"]},i.a.createElement(Ne,{onClick:e.hideModal,className:be.a["close-button"],text:Y.buttons.delete,type:fe}),e.children))}Oe.defaultProps={children:""};var xe=Oe,je="h2",Ie=function(e,t,n){switch(e){case"h4":return i.a.createElement("h4",{className:t},n);case"h3":return i.a.createElement("h3",{className:t},n);case je:return i.a.createElement("h2",{className:t},n);default:return i.a.createElement("h1",{className:t},n)}};function Ce(e){return Ie(e.type,e.className,e.text)}Ce.defaultProps={type:"h1",className:""};var Re=Ce,we=function(e){return i.a.createElement("input",{type:"text",name:e.name,className:e.className,placeholder:e.placeholder,onChange:e.onChange,value:e.value})};we.defaultProps={name:"",className:"",placeholder:"",value:""};var Se=we,De=n(47),Te=n.n(De);var Me=function(e){return i.a.createElement("div",null,i.a.createElement("div",null,e.children),e.hasError&&i.a.createElement("div",{className:Te.a["error-message"]},e.message))},Ae=n(8),Pe=n.n(Ae),Le={editingIngredient:{name:"",id:""},ingredients:[],recipeName:"",notes:"",recipeNameError:!1,ingredientError:!1,ingredientsAmountError:!1},Ue=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).removeIngredient=n.removeIngredient.bind(Object(T.a)(Object(T.a)(n))),n.handleChange=n.handleChange.bind(Object(T.a)(Object(T.a)(n))),n.handleEditingIngredient=n.handleEditingIngredient.bind(Object(T.a)(Object(T.a)(n))),n.handleAddIngredient=n.handleAddIngredient.bind(Object(T.a)(Object(T.a)(n))),n.handleSaveRecipe=n.handleSaveRecipe.bind(Object(T.a)(Object(T.a)(n))),n.validateRecipeName=n.validateRecipeName.bind(Object(T.a)(Object(T.a)(n))),n.validateIngredientsAmount=n.validateIngredientsAmount.bind(Object(T.a)(Object(T.a)(n))),n.clear=n.clear.bind(Object(T.a)(Object(T.a)(n))),n.state=Le,n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"handleChange",value:function(e){var t;this.setState((t={},Object(M.a)(t,e.target.name,e.target.value),Object(M.a)(t,"recipeNameError",!1),t))}},{key:"handleEditingIngredient",value:function(e){this.setState({editingIngredient:{name:e.target.value,id:_("ingredient")},ingredientError:!1,ingredientsAmountError:!1})}},{key:"handleAddIngredient",value:function(){this.setState(function(e){return(t=e.editingIngredient.name).length<=20&&t.length>=2?{ingredients:Object(u.a)(e.ingredients).concat([e.editingIngredient]),editingIngredient:{name:"",id:""}}:{ingredientError:!0};var t})}},{key:"removeIngredient",value:function(e){this.setState(function(t){return{ingredients:t.ingredients.filter(function(t,n){return e!==n})}})}},{key:"validateRecipeName",value:function(){return(e=this.state.recipeName).length<=30&&e.length>=3||this.setState({recipeNameError:!0});var e}},{key:"validateIngredientsAmount",value:function(){return(e=this.state.ingredients).length<=16&&e.length>=1||this.setState({ingredientsAmountError:!0});var e}},{key:"handleSaveRecipe",value:function(){var e=this;this.validateRecipeName()&&this.validateIngredientsAmount()&&function(){var t={mealId:e.props.mealId,name:e.state.recipeName,ingredients:e.state.ingredients,notes:e.state.notes};e.validateRecipeName(),e.validateIngredientsAmount(),e.props.addRecipeInRedux(t),e.props.hideModal(!1),e.setState(Le)}()}},{key:"clear",value:function(){this.setState(Le)}},{key:"render",value:function(){var e=this;return i.a.createElement("div",null,i.a.createElement("form",null,i.a.createElement(Me,{hasError:this.state.recipeNameError,message:Q},i.a.createElement(Se,{className:Pe.a["recipe-name"],placeholder:W.inputs.recipeName,name:"recipeName",onChange:this.handleChange,value:this.state.recipeName})),i.a.createElement("div",null,i.a.createElement(Me,{hasError:this.state.ingredientsAmountError,message:q},i.a.createElement(Re,{type:"h3",text:W.recipe.ingredients,className:Pe.a["ingredients-heading"]})),i.a.createElement("ul",{className:Pe.a["ingredients-list"]},this.state.ingredients.map(function(t,n){return i.a.createElement("li",{key:t.id,className:Pe.a.ingredient},i.a.createElement(Ne,{onClick:function(){return e.removeIngredient(n)},className:Pe.a["delete-btn"],text:W.buttons.delete,type:fe}),t.name)})),i.a.createElement("div",{className:Pe.a["add-ingredient"]},i.a.createElement(Ne,{buttonType:"submit",className:Pe.a["add-ingredient-button"],text:W.buttons.add,onClick:this.handleAddIngredient,type:"positive"}),i.a.createElement(Me,{hasError:this.state.ingredientError,message:K},i.a.createElement(Se,{className:Pe.a["ingredient-field"],onChange:this.handleEditingIngredient,value:this.state.editingIngredient.name,name:"editingIngredient"})))),i.a.createElement("div",null,i.a.createElement(Re,{type:"h3",text:W.recipe.notes,className:Pe.a["notes-heading"]}),i.a.createElement("textarea",{className:Pe.a.notes,onChange:this.handleChange,value:this.state.notes,placeholder:W.inputs.notes,name:"notes"}))),i.a.createElement(Ne,{onClick:this.handleSaveRecipe,className:Pe.a["save-button"],text:W.buttons.save,type:"positive"}),i.a.createElement(Ne,{onClick:this.clear,className:Pe.a["clear-button"],text:W.buttons.clear,type:fe}))}}]),t}(a.Component);Ue.defaultProps={addRecipeInRedux:function(){return!0}};var Ve=Object(s.b)(function(){return{}},function(e){return{addRecipeInRedux:function(t){return function(e,t){var n=Object(d.a)({},t,{id:_("recipe")});g(n),e({type:v,newRecipe:n})}(e,t)}}})(Ue),Be=n(19),Ge=n.n(Be);var He=function(e){return i.a.createElement("div",null,i.a.createElement(Re,{text:e.recipe.name,className:Ge.a["recipe-heading"]}),i.a.createElement(Re,{type:je,className:Ge.a["ingredients-heading"],text:"Ingredients"}),i.a.createElement("ul",{className:Ge.a["ingredients-list"]},e.recipe.ingredients.map(function(e){return i.a.createElement("li",{key:e.id,className:Ge.a.ingredient},e.name)})),i.a.createElement("div",{className:Ge.a.notes},i.a.createElement(Re,{type:je,className:Ge.a["notes-heading"],text:W.recipe.notes}),e.recipe.notes))},Je=n(15),Ye=n.n(Je),ze="ADD_RECIPE",We=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).closeModal=n.closeModal.bind(Object(T.a)(Object(T.a)(n))),n.deleteRecipe=n.deleteRecipe.bind(Object(T.a)(Object(T.a)(n))),n.handleAddRecipe=n.handleAddRecipe.bind(Object(T.a)(Object(T.a)(n))),n.handleViewRecipe=n.handleViewRecipe.bind(Object(T.a)(Object(T.a)(n))),n.state={showModal:!1,type:ze,recipe:""},n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"closeModal",value:function(){this.setState({showModal:!1})}},{key:"deleteRecipe",value:function(e){this.props.deleteRecipeInRedux(e)}},{key:"handleAddRecipe",value:function(){this.setState({showModal:!0,type:ze})}},{key:"handleViewRecipe",value:function(e){this.setState({showModal:!0,type:"VIEW_RECIPE",recipe:e})}},{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:Ye.a.meal},i.a.createElement(Re,{text:this.props.mealName,className:Ye.a.heading}),this.props.recipes.filter(function(t){return t.mealId===e.props.mealId}).map(function(t){return i.a.createElement("div",{key:t.id,className:Ye.a.recipes},i.a.createElement("li",{className:Ye.a["recipe-container"]},i.a.createElement(Ne,{onClick:function(){return e.deleteRecipe(t.id)},className:Ye.a["delete-btn"],text:Y.buttons.delete,type:fe}),i.a.createElement(Ne,{onClick:function(){return e.handleViewRecipe(t)},className:Ye.a.recipe,text:t.name})))}),i.a.createElement(Ne,{onClick:function(){return e.handleAddRecipe(!0)},className:Ye.a["add-recipe-button"],text:z.add,type:"positive"}),i.a.createElement(xe,{shouldShow:this.state.showModal,hideModal:this.closeModal},this.state.type===ze?i.a.createElement(Ve,{mealId:this.props.mealId,hideModal:this.closeModal}):i.a.createElement(He,{recipe:this.state.recipe})))}}]),t}(a.Component);We.defaultProps={recipes:[],deleteRecipeInRedux:function(){return!0}};var Xe=Object(s.b)(function(e){return{recipes:e.recipes}},function(e){return{deleteRecipeInRedux:function(t){return function(e,t){var n=p().filter(function(e){return e.id!==t});b(n),e({type:f,newRecipes:n})}(e,t)}}})(We),Fe=[{name:"breakfast",id:"breakfast"},{name:"snack",id:"snack"},{name:"lunch",id:"lunch"},{name:"dinner",id:"dinner"}],Ke=[{name:"Monday",id:"monday"},{name:"Tuesday",id:"tuesday"},{name:"Wednesday",id:"wednesday"},{name:"Thursday",id:"thursday"},{name:"Friday",id:"friday"},{name:"Saturday",id:"saturday"},{name:"Sunday",id:"sunday"}],Qe=n(48),qe=n.n(Qe);var Ze=function(){return i.a.createElement("div",{className:qe.a.cookbook},Fe.map(function(e){return i.a.createElement(Xe,{key:e.id,mealName:e.name,mealId:e.id})}))},$e=n(25),et=n(12),tt=n.n(et);function nt(e){return i.a.createElement("select",{value:e.value,onChange:function(t){return e.onChange(t.target.value)},className:e.className},i.a.createElement("option",{value:"",disabled:!0,hidden:!0},e.placeholder),e.options.map(function(e){return i.a.createElement("option",{value:e.value,key:e.label},e.label)}))}nt.defaultProps={value:"",onChange:function(){return!0},className:"",options:[],placeholder:"Please choose"};var at=nt,it=function(e,t){return t.find(function(t){return t.id===e})||{}},rt=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).handleDishChoice=n.handleDishChoice.bind(Object(T.a)(Object(T.a)(n))),n.deleteDish=n.deleteDish.bind(Object(T.a)(Object(T.a)(n))),n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"handleDishChoice",value:function(e){var t={id:_("dish"),day:this.props.day,mealId:this.props.meal.id,recipeId:e,name:it(e,this.props.recipesOfCurrentMeal).name,ingredients:it(e,this.props.recipesOfCurrentMeal).ingredients};this.props.addDishToRedux(t)}},{key:"deleteDish",value:function(e){this.props.deleteDishInRedux(e)}},{key:"render",value:function(){var e=this,t=this.props.recipesToChoose.map(function(e){return{value:e.id,label:e.name}});return i.a.createElement("div",{className:tt.a.meal},i.a.createElement("div",{className:tt.a["header-container"]},i.a.createElement(Re,{type:"h3",text:this.props.meal.name,className:tt.a["meal-heading"]})),i.a.createElement("div",null,this.props.todayDishes.map(function(t){return i.a.createElement("div",{key:t.id,className:tt.a.dish},i.a.createElement(Ne,{type:fe,text:Y.buttons.delete,onClick:function(){return e.deleteDish(t.id)},className:tt.a["delete-button"]}),i.a.createElement("div",{className:tt.a.name},t.name))}),0!==this.props.recipesToChoose.length&&i.a.createElement(at,{placeholder:Y.buttons.plus,options:t,onChange:this.handleDishChoice,className:tt.a.select}),0===this.props.recipesOfCurrentMeal.length&&i.a.createElement("div",{className:tt.a.hint},Z)))}}]),t}(a.Component);rt.defaultProps={recipesOfCurrentMeal:[],recipesToChoose:[],todayDishes:[],day:"",meal:{},addDishToRedux:function(){return!0},deleteDishInRedux:function(){return!0}};var st=Object($e.a)(function(e,t){var n=e.recipes.filter(function(e){return e.mealId===t.meal.id}),a=e.dishes.filter(function(e){return e.day===t.day&&e.mealId===t.meal.id}),i=n.filter(function(e){return!function(e,t){return!!t.find(function(t){return t.recipeId===e.id})}(e,a)});return{recipesOfCurrentMeal:n,recipesToChoose:i,todayDishes:a}},function(e){return{addDishToRedux:function(t){return function(e,t){var n=Object(d.a)({},t,{id:_("dish")});k(n),e({type:O,newDish:n})}(e,t)},deleteDishInRedux:function(t){return function(e,t){var n=E().filter(function(e){return e.id!==t});N(n),e({type:x,newDishes:n})}(e,t)}}})(rt),ct=n(32),ot=n.n(ct);var lt=function(e){return i.a.createElement("div",{className:ot.a.day},i.a.createElement(Re,{className:ot.a["day-heading"],text:e.dayName}),i.a.createElement("div",{className:ot.a.meals},Fe.map(function(t){return i.a.createElement(st,{key:t.id,meal:t,day:e.dayName})})))},dt=n(49),ut=n.n(dt);var mt=function(){return i.a.createElement("div",{className:ut.a["meal-planning"]},Ke.map(function(e){return i.a.createElement(lt,{dayName:e.name,key:e.id})}))},ht=n(24),pt=n.n(ht),gt=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).handleIngredientCheck=n.handleIngredientCheck.bind(Object(T.a)(Object(T.a)(n))),n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"handleIngredientCheck",value:function(e,t){var n,a,i=Object(d.a)({},t,{ingredients:(n=t.ingredients,a=e,n.map(function(e){return e.id===a.id?Object(d.a)({},e,{isBought:!e.isBought}):e}))});this.props.updateDishesInRedux(i)}},{key:"render",value:function(){var e=this,t=this.props.dishes.filter(function(t){return t.day===e.props.day});return i.a.createElement("div",{className:pt.a["daily-list"]},i.a.createElement(Re,{type:je,text:this.props.day,className:pt.a["day-heading"]}),t.length?t.map(function(t){return t.ingredients.map(function(n){return i.a.createElement("div",{key:n.id,className:pt.a["ingredient-container"]},i.a.createElement("input",{type:"checkbox",checked:n.isBought,className:pt.a["ingredient-checkbox"],onChange:function(){return e.handleIngredientCheck(n,t)}}),i.a.createElement("span",null,n.name))})}):i.a.createElement("div",{className:pt.a.hint},$))}}]),t}(a.Component);gt.defaultProps={dishes:{}};var bt=Object(s.b)(function(e){return{dishes:e.dishes}},function(e){return{updateDishesInRedux:function(t){return function(e,t){var n=E().map(function(e){return e.id===t.id?t:e});N(n),e({type:x,newDishes:n})}(e,t)}}})(gt),_t=n(50),vt=n.n(_t);var ft=function(){return i.a.createElement("div",{className:vt.a["grocery-list"]},Ke.map(function(e){return i.a.createElement(bt,{day:e.name,key:e.id})}))},yt=n(33),Et=n.n(yt);var kt=function(e){return i.a.createElement("div",{className:Et.a.container},i.a.createElement("div",{className:Et.a["time-unit"]},e.timeUnit),i.a.createElement(Re,{text:e.unitName,type:je,className:Et.a.heading}))},Nt=n(34),Ot=n.n(Nt);function xt(e){return i.a.createElement("div",{className:Ot.a.container},i.a.createElement("input",{type:"number",min:e.min,max:e.max,onChange:e.onChange,name:e.name,value:e.value,className:Ot.a["time-input"]}),i.a.createElement(Re,{text:e.unitName,type:je,className:Ot.a.heading}))}xt.defaultProps={min:"",max:"",name:"",unitName:""};var jt=xt,It=n(20),Ct=n.n(It),Rt="start",wt=function(e){return Math.floor(e/3600)},St=function(e){return Math.floor((e-3600*wt(e))/60)},Dt=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).handleChange=n.handleChange.bind(Object(T.a)(Object(T.a)(n))),n.startTimer=n.startTimer.bind(Object(T.a)(Object(T.a)(n))),n.stopTimer=n.stopTimer.bind(Object(T.a)(Object(T.a)(n))),n.resetTimer=n.resetTimer.bind(Object(T.a)(Object(T.a)(n))),n.updateCountdown=n.updateCountdown.bind(Object(T.a)(Object(T.a)(n))),n.state={hours:0,minutes:0,seconds:0,buttonShown:Rt},n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"componentWillUnmount",value:function(){window.clearInterval(this.interval)}},{key:"handleChange",value:function(e){this.setState(Object(M.a)({},e.target.name,Number(e.target.value)))}},{key:"startTimer",value:function(){var e=this,t=3600*this.state.hours+60*this.state.minutes+this.state.seconds;if(!(t<=0)){var n=Date.now()/1e3+t;this.interval=window.setInterval(function(){return e.updateCountdown(n)},1e3),this.setState({buttonShown:"stop"})}}},{key:"updateCountdown",value:function(e){var t,n=Math.round(e-Date.now()/1e3);this.setState({hours:wt(n),minutes:St(n),seconds:(t=n,t-3600*wt(t)-60*St(t))}),this.state.hours<=0&&this.state.minutes<=0&&this.state.seconds<=0&&this.stopTimer()}},{key:"stopTimer",value:function(){window.clearInterval(this.interval),this.setState({buttonShown:Rt})}},{key:"resetTimer",value:function(){window.clearInterval(this.interval),this.setState({hours:0,minutes:0,seconds:0,buttonShown:Rt})}},{key:"render",value:function(){return i.a.createElement("div",{className:Ct.a.timer},"stop"===this.state.buttonShown&&i.a.createElement("div",null,i.a.createElement(kt,{timeUnit:this.state.hours,unitName:X.hours}),i.a.createElement(kt,{timeUnit:this.state.minutes,unitName:X.minutes}),i.a.createElement(kt,{timeUnit:this.state.seconds,unitName:X.seconds})),this.state.buttonShown===Rt&&i.a.createElement("div",{className:Ct.a.inputs},i.a.createElement(jt,{min:"0",max:"24",onChange:this.handleChange,name:"hours",value:this.state.hours,unitName:X.hours}),i.a.createElement(jt,{min:"0",max:"59",onChange:this.handleChange,name:"minutes",value:this.state.minutes,unitName:X.minutes}),i.a.createElement(jt,{min:"0",max:"59",onChange:this.handleChange,name:"seconds",value:this.state.seconds,unitName:X.seconds})),i.a.createElement("div",{className:Ct.a.buttons},this.state.buttonShown===Rt&&i.a.createElement(Ne,{onClick:this.startTimer,text:F.start,type:"positive",className:Ct.a["start-button"]}),"stop"===this.state.buttonShown&&i.a.createElement(Ne,{onClick:this.stopTimer,text:F.stop,type:fe,className:Ct.a["stop-button"]}),i.a.createElement(Ne,{onClick:this.resetTimer,text:F.reset,className:Ct.a["reset-button"]})))}}]),t}(a.Component),Tt=[{id:"home",text:H.home,component:i.a.createElement(pe,null)},{id:"cookbook",text:H.cookbook,component:i.a.createElement(Ze,null)},{id:"plannig",text:H.planning,component:i.a.createElement(mt,null)},{id:"groceryList",text:H.groceryList,component:i.a.createElement(ft,null)},{id:"timer",text:H.timer,component:i.a.createElement(Dt,null)}],Mt=function(e){function t(e){var n;return Object(C.a)(this,t),(n=Object(w.a)(this,Object(S.a)(t).call(this,e))).handleNavLinkClick=n.handleNavLinkClick.bind(Object(T.a)(Object(T.a)(n))),n.state={currentLinkId:"home"},n}return Object(D.a)(t,e),Object(R.a)(t,[{key:"handleNavLinkClick",value:function(e){this.setState({currentLinkId:e})}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(V,{links:Tt,onLinkClick:this.handleNavLinkClick,currentLinkId:this.state.currentLinkId}),i.a.createElement("div",null,function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(arguments.length>1&&void 0!==arguments[1]?arguments[1]:[]).find(function(t){return t.id===e}).component}(this.state.currentLinkId,Tt)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var At=Object(r.createStore)(I,Object(c.composeWithDevTools)());l.a.render(i.a.createElement(s.a,{store:At},i.a.createElement(Mt,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[51,2,1]]]);
//# sourceMappingURL=main.55991396.chunk.js.map