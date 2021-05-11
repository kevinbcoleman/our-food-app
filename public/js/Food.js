class Food extends React.Component {
  render = () => {
    return (
      <div className="mb-5">
        <img style={{ width: '350px', height: '250px' }} src={this.props.food.image} />
        <h2>{this.props.food.name}</h2>
        <p>{this.props.food.description}</p>
        {/* <button style={{ display: 'none' }} value={this.props.food._id} onClick={this.props.updateFood} className="btn btn-light">Edit</button> */}
        <details>
          <summary className="btn btn-light">Edit</summary>
          <form className="form-group" id={this.props.food._id} onSubmit={this.props.updateFood}>
            <label htmlFor="name">Name</label>
            <input
              className="form-control"
              type="text"
              id="name"
              onKeyUp={this.props.onChange}
            />
            <label htmlFor="image">Image</label>
            <input
              className="form-control"
              type="text"
              id="image"
              onKeyUp={this.props.onChange}
            />
            <label htmlFor="description">Description</label>
            <input
              className="form-control"
              type="text"
              id="description"
              onKeyUp={this.props.onChange}
            />
            <input className="btn btn-primary mb-5" type="submit" value="Update Food" />
          </form>
        </details>
        <button value={this.props.food._id} onClick={this.props.onDelete} className="btn btn-danger">DELETE</button>
      </div>
    )
  }
}

