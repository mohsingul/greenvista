import React, {Component} from 'react';

class Copyright extends Component {
    render (){

        return (
            <div className="copyright">
                <p>Copyright © 2024 <a href="#">{this.props.title}</a>. All Rights Reserved.</p>
            </div>
        )
    }
}

export default Copyright