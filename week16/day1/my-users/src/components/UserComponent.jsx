const UserComponent = (props) => {
console.log('props', props)

    return (
        <div style={{
            backgroundColor: 'violet'
        }}>
            <img src={`https://robohash.org/${props.item.id}?size=150x150`}/>
            <p>{props.item.name}</p>
            <p>{props.item.email}</p>
            <p>{props.item.username}</p>
            
        </div>
    )
}

export default UserComponent
