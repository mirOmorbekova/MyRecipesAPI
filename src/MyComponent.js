function MyComponent({label, cuisineType, image, calories, ingredients}) {
    return(<div>

    <div className="container">
        <h2>"{label}"</h2>
    </div>

    <div className="container">
        <h3>{cuisineType}</h3>
    </div>

    <div className="container">
    <img className="img" src={image} alt="recipes"/>
    </div>

    <div className="container">
    <p className="calories">{calories.toFixed()} calories</p>
    </div>

    <div className="container">
        <ul>
        {ingredients.map(ingredient => (
        <li>{ingredient}</li>
    ))}
    </ul>
    </div>

    </div>

    )
}

export default MyComponent;