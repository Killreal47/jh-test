import {useGetStatusControllerQuery} from "../../services/tasksApi";

import "./board.css";
import {FC} from "react";
import {ItemCategory} from "../ItemCategory/ItemCategory.tsx";
import {CssBaseline} from "@mui/material";

export const Board: FC = () => {

    const {data, isLoading} = useGetStatusControllerQuery();

    const renderItemCategory = () => {

        return data.map((item) => {
            return (
                <ItemCategory key={item.name} name={item.name}/>
            )
        })
    }

    return (
        <div className='wrapper'>
            <CssBaseline/>
            {isLoading ? 'Данные загружаются' : renderItemCategory()}
        </div>
    );
};
