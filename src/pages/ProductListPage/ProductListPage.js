import React, { Component } from 'react';
import './ProductListPage.css';
import { Link } from 'react-router-dom';

import callApi from './../../utils/apiCaller';
import ProductList from './../../components/ProductList/ProductList';

class ProductListPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        // Gọi trước khi component đc render lần đầu tiên
        callApi('/products', 'GET', null).then(res => {
            if (res) {
                this.setState({
                    products: res.data
                });
            }
        });
    }

    render() {
        var { products } = this.state;
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                        <Link to="/product/add" className="btn btn-primary mb-5">
                            <i className="glyphicon glyphicon-plus"></i> Thêm Sản Phẩm
                        </Link>
                        <ProductList products={products} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductListPage;
