import * as React from 'react'
import Button from '../Button';
import './Feature.scss';

type Props = {
    header: string;
    content: string;
    image: string;
}

export default function Feature(props: Props): JSX.Element {
    const { header, content, image } = props;
    const HandleMore = () => {
        //
    }
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} className="image" alt="Product" />
            </div>
            <div className="card-header">
                <div>
                    {header}
                </div>
            </div>
            <div className="card-content">
                {content}
            </div>
            <div className="card-footer">
                <div className="button-container">
                    <Button onClick={HandleMore} className="secondary">
                        View More
                    </Button>
                </div>
            </div>
        </div>
    )
}
