export const renderHomePage = (req, res) => {
    res.status(200).send('<h1>Homepage</h1>')
}

export const renderAboutPage = (req, res) => {
    res.status(200).send('<h1>About Us page</h1>')
}