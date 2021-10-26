import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import Image from 'next/image'
import styles from './Post.module.scss'

export const Post: React.FC = () => {
    return (
        <Paper elevation={0} className="p-20" classes={{root: styles.paper}}>
            <Typography className={styles.title} variant="h5">11 июня, вторник. В этот день я родился, параллельно поздравив маму с днём рождения. Мы родились с ней в один день</Typography>
            <Typography className="mt-10 mb-15" >11 июня, вторник. В этот день я родился, параллельно поздравив маму с днём рождения. Мы родились с ней в один день</Typography>
            <Image 
            src="https://automobile-zip.ru/wp-content/uploads/9/c/3/9c396f6369293b0969460aa33bb4bdd4.jpeg"
            height={500}
            width={600}
            />
        </Paper>
    )
}