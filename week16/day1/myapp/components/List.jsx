const List = () => {
    const products = [
        {id: 1, name: "iphone 16"},
        {id: 2, name: "iphone 10"},
        {id: 3, name: "iphone 11"},
    ]

    const listItems = products.map(item => {
        return <h2 key={item.id}>{item.name}</h2>
    })
    return (
        <>
            <h2>products</h2>
            {listItems} 
            
        </>
    )
    
}

export default List