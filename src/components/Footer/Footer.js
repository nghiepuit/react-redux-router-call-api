import React, { Component } from 'react';
import styles from './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div style={{ background: `#FFF` }} className={styles.footer}>
                <p>&copy; 2016 &middot; Hashnode &middot; LinearBytes Inc.</p>
                <p><a href="https://twitter.com/@mern_io" target="_Blank">@mern_io</a></p>
            </div>
        );
    }
}

export default Footer;
