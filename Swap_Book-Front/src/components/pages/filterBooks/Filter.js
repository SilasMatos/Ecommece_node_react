import React from 'react';
import '../filterBooks/filter.css';

function Filter() {
  return (
    <div className="container-ft">
      <div className="filters">
        <h2>Filtros</h2>
        <div className="filter-group">
          <h3>Gênero</h3>
          {/* Coloque aqui os elementos para os filtros de gênero */}
        </div>
        <div className="filter-group">
          <h3>Preço</h3>
          {/* Coloque aqui os elementos para os filtros de preço */}
        </div>
        <div className="filter-group">
          <h3>Qualidade</h3>
          {/* Coloque aqui os elementos para o filtro de qualidade */}
        </div>
      </div>
      <div className="book-cards">
        {/* Coloque aqui os componentes dos cards de livro */}
      </div>
    </div>
  );
}

export default Filter;
