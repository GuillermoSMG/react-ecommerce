import { useId } from 'react';
import { useFilters } from '../../hooks/useFilters';
import './Filters.css';

function Filters() {
  const [minPriceFilterId] = useId();
  const [categoryFilterId] = useId();
  const { setFilters, filters } = useFilters();

  const handleChangeMinPrice = e => {
    setFilters(prevState => ({
      ...prevState,
      minPrice: e.target.value,
    }));
  };

  const handleChangeCategory = e => {
    setFilters(prevState => ({
      ...prevState,
      category: e.target.value,
    }));
  };

  return (
    <section className='filters'>
      <div>
        <label htmlFor='price'>Price</label>
        <input
          title={`Minimum price $${filters.minPrice}`}
          type='range'
          id={minPriceFilterId}
          min='0'
          max='1000'
          onChange={handleChangeMinPrice}
          className='range'
          step='10'
          value={filters.minPrice}
        />
        <span>${filters.minPrice}</span>
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <select
          id={categoryFilterId}
          onChange={handleChangeCategory}
          title={`Category '${filters.category}'`}
        >
          <option value='all'>All</option>
          <option value='laptops'>Laptops</option>
          <option value='smartphones'>Smartphones</option>
        </select>
      </div>
    </section>
  );
}
export default Filters;
