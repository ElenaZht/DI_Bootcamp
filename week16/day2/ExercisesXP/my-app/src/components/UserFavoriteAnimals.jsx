import React, { Component } from 'react';

class UserFavoriteAnimals extends Component {
    render() {
        let animalsList = this.props.animals.map((a, idx) => {
            return <li key={idx}>{a}</li>
        })
        return <ul>{animalsList}</ul>;
    }
}

export default UserFavoriteAnimals;
