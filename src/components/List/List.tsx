import {Avatar, IconButton} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import EditIcon from '@mui/icons-material/Edit';

import "./list.css"
import {FC} from "react";

export const List:FC = () => {
    return (
        <div className="item-category__wrapper">
            <div className="item-category__header">
                <div className="item-category__number">
                    <div className='item-category__string'>А-01</div>
                    <IconButton size="small">
                        <Brightness1Icon fontSize="inherit"/>
                    </IconButton>
                </div>
                <div className="item-category__descr">
                    Краткое наименование задачи максимум в 2 - 3 строки
                </div>
                <div className="item-category__btns">
                    <IconButton sx={{padding: 0}} aria-label="delete" size="small" color="primary">
                        <EditIcon sx={{width: 14}} fontSize="inherit"/>
                    </IconButton>
                    <IconButton sx={{padding: 0}} aria-label="delete" size="small" color="primary">
                        <DeleteIcon sx={{width: 14}} fontSize="inherit"/>
                    </IconButton>
                </div>
            </div>
            <div className='item-category__tegs'>
                <div className="item-category__teg">
                    #тег 1
                </div>
                <div className="item-category__teg">
                    #тег 2
                </div>
                <div className="item-category__teg">
                    #тег 3
                </div>
                <div className="item-category__teg">
                    #тег 4
                </div>
                <div className="item-category__teg">
                    #тег 5
                </div>

            </div>
            <div className='item-category__footer'>
                <div className="item-category__user">
                    <Avatar sx={{
                        width: 22,
                        height: 22,
                    }}>H</Avatar>
                    <div>Исполнитель</div>
                </div>
                <div className="item-category__data">до ДД/ММ/ГГГГ</div>
            </div>
        </div>
    );
};

