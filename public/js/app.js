
class App extends React.Component {
  state = {
    foods: [],
    name: '',
    image: '',
    description: ''
  }

  handleChange = event => {
    this.setState({ [event.target.id]: event.target.value })
  }

  handleSubmit = event => {
    event.preventDefault()
    axios
      .post('/foods', this.state)
      .then(response => {
        this.setState({
          foods: response.data,
          name: '',
          image: '',
          description: ''
        })
      })
  }

  updateFood = event => {
    event.preventDefault()
    const id = event.target.id
    console.log(id)
    console.log(this.state)
    axios.put('/foods/' + id, this.state).then(response => {
      console.log(response)

      this.setState({
        foods: response.data,
        name: '',
        image: '',
        description: ''
      })
    })
  }


  deleteFood = event => {
    axios.delete('/foods/' + event.target.value).then(response => {
      this.setState({
        foods: response.data
      })
    })
  }

  componentDidMount = () => {
    axios.get('/foods').then(response => {
      this.setState({
        foods: response.data
      })
    })
  }
  render = () => {
    return (
      <div>
        <h1>Foods</h1>
        <h2>Add a dish</h2>
        <form className="form-group col-sm-6" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            className="form-control"
            type="text"
            id="name"
            onKeyUp={this.handleChange}
            value={this.state.foods.name}
          />
          <label htmlFor="image">Image</label>
          <input
            className="form-control"
            type="text"
            id="image"
            onKeyUp={this.handleChange}
            value={this.state.foods.image}

          />
          <label htmlFor="description">Description</label>
          <input
            className="form-control"
            type="text"
            id="description"
            onKeyUp={this.handleChange}
            value={this.state.foods.description}

          />
          <input className="btn btn-success mb-5" type="submit" value="Add a Dish" />
        </form>
        {this.state.foods.map((food) => (
          <Food
            key={food._id}
            food={food}
            onDelete={this.deleteFood}
            updateFood={this.updateFood}
            onChange={this.handleChange}
          />
        ))}
      </div>
    )
  }
}



ReactDOM.render(
  <App />,
  document.querySelector('main')
)

