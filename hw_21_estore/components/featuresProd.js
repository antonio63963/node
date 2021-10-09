const featuresCollection = {
  laptop: {
    diagonal: [13, 14, 15, 16, 17, '>17'],
    processor_series: ['Intel i3', 'Intel i5', 'Intel i7', 'Intel i9'],
    processor: '',
    getSelectElem(name, arr) {
      const items = [...arr];
      const options = items.map(item => {
        return `<option value="${item}">${item}</option>`;
      }).join('');
      const selectElem = `
      <select name="${name}" class="form-select selecDiagonal mb-3" aria-label="Default select example">
      <option selected>select the ${name}</option>
        ${options}
      </select>
      `;
      return selectElem;
    },
    buildForm: function() {
      const diagonalSelect = this.getSelectElem('diagonal', this.diagonal);
      const processorSelect = this.getSelectElem('processor_series', this.processor_series);
      return `
        <h2>Laptop</h2>
        ${diagonalSelect}  
        ${processorSelect}  
        <input name="processor" type="text" class="form-control imgInput mb-3" placeholder="model processor"
        aria-label="search" aria-describedby="button-addon2">
      `;
    }
  }

};

module.exports = featuresCollection;

