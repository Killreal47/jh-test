import "./ItemCategory.css";
import {List} from "../List/List.tsx";

interface CategoryProps {
    name: string;
}

export const ItemCategory = ({name}: CategoryProps) => {

    return (

        <div className="item-category">
            <h2 className='item-category__name'>{name}</h2>
            <div className="item-category__lists">
                <List/>
                <List/>
                <List/>
                <List/>
                <List/>

            </div>
        </div>
    );
};

