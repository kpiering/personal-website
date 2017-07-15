import React from 'react'
import PropTypes from 'prop-types'
import Project from './ProjectComponent'

export const Portfolio = ({ portfolio, increment, doubleAsync }) => (
  <div style={{ margin: '0 auto' }} >
    <h2>Portfolio</h2>
    <button className='btn btn-primary' onClick={increment}>
      Increment
    </button>
    {' '}
    <button className='btn btn-secondary' onClick={doubleAsync}>
      Double (Async)
    </button>
    {
      portfolio.map((item, index) => {
        
        return <Project item={item} key={`portfolio_${index}`}></Project>;
      })
    }
  </div>
)
Portfolio.propTypes = {
  portfolio: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string.isRequired })).isRequired,
  increment: PropTypes.func.isRequired,
  doubleAsync: PropTypes.func.isRequired,
}

export default Portfolio
