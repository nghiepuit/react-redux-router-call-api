import React, { Component } from 'react';
import ProductItem from './../ProductItem/ProductItem';

class ProductList extends Component {
    render() {
        var { products } = this.props;
        return (
            <div className="panel panel-success">
                <div className="panel-heading">
                    <h3 className="panel-title">Danh Sách Sản Phẩm</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>STT</th>
                                <th>Mã SP</th>
                                <th>Tên</th>
                                <th>Mô Tả</th>
                                <th>Giá</th>
                                <th>Trạng Thái</th>
                                <th>Hành Động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.showProducts(products)}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

    showProducts(products) {
        var result = null;
        result = products.map((product, index) => {
            return <ProductItem product={product} key={index} index={index} />
        });
        return result;
    }

}

export default ProductList;
