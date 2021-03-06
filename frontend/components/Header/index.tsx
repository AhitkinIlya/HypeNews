import React from 'react'
import { Paper, Button, IconButton, Avatar, Link } from '@material-ui/core'
import { 
    Search as SearchIcon,
    CreateOutlined as PenIcon,
    MessageOutlined as MessageIcon,
    NotificationsNoneOutlined as AlertIcon,
    Menu as MenuIcon,
    ExpandMoreOutlined as ArrowIcon
} from '@material-ui/icons';

import styles from './Header.module.scss'

export const Header: React.FC = () => {
    return (
        <Paper classes={{ root: styles.root }} elevation={0} square>
            <div className="d-flex align-center">
                <IconButton>
                    <MenuIcon />
                </IconButton>
                <Link href="/">
                    <a className={styles.logo}>
                        HypeNews
                    </a>
                </Link>
                <div className={ styles.searchBlock }>
                    <SearchIcon />
                    <input placeholder="Поиск"/>
                </div>
                <Link href="/write">
                    <a>
                        <Button className={ styles.penButton } variant="contained">
                            <PenIcon /> новая запись
                        </Button>
                    </a>
                </Link>
            </div>
            <div className="d-flex align-center">
                <IconButton>
                    <MessageIcon />
                </IconButton>
                <IconButton>
                    <AlertIcon />
                </IconButton>
                <Link href="/profile/1">
                    <a className={ styles.profile }>
                        <Avatar 
                            className={styles.avatar}
                            alt="Аватарка"
                            src="https://sun9-12.userapi.com/impg/CBZQatkNC_mRSw12N2-CV-6Hl-fq4KuHwmvLFg/7TTrwEBZxWQ.jpg?size=802x1080&quality=96&sign=d6e8c6710e141a5f56abe27ba61e7720&type=album"
                        />
                        <ArrowIcon />
                    </a>
                </Link>
            </div>
        </Paper>
    )
}



