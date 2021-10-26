import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core'
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon
} from '@material-ui/icons'

import { Post } from '../../components/Post'
import { MainLayout } from '../../layouts/MainLayout'

export default function Profile() {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-10 pr-20 pt-20 mb-30" elevation={0}>
                <div className="d-flex justify-between">
                    <div>
                        <Avatar
                            style={{ width: 120, height: 120, borderRadius: 6}}
                            src="https://sun9-12.userapi.com/impg/CBZQatkNC_mRSw12N2-CV-6Hl-fq4KuHwmvLFg/7TTrwEBZxWQ.jpg?size=802x1080&quality=96&sign=d6e8c6710e141a5f56abe27ba61e7720&type=album"
                        />
                        <Typography style={{ fontWeight: 'bold' }} className="mt-10" variant="h4">
                            Илья Ахиткин
                        </Typography>
                    </div>
                    <div>
                        <Button
                            style={{ height: 42, minWidth: 45, width: 45, marginRight: 10 }}
                            variant="contained"
                        >
                            <SettingsIcon />
                        </Button>
                        <Button style={{ height: 42 }} variant="contained" color="primary">
                            <MessageIcon className="mr-10" />
                            Написать
                        </Button>
                    </div>
                </div>
            </Paper>
        </MainLayout>
    )
}