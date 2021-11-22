class APIFeatures {
  constructor(data, queryString) {
    this.data = data;
    this.queryString = queryString;
  }

  paginate() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 10;
    const skip = (page - 1) * limit;

    this.data = this.data.slice(skip, page * limit);
    return this;
  }

}

module.exports = APIFeatures;
