import { Paper, Avatar, Typography, Button, Tabs, Tab } from '@material-ui/core'
import {
    SettingsOutlined as SettingsIcon,
    TextsmsOutlined as MessageIcon
} from '@material-ui/icons'

// import { Post } from '../../components/Post'
import { MainLayout } from '../../layouts/MainLayout'
import { Post } from '../../components/Post'

export default function Profile() {
    return (
        <MainLayout contentFullWidth hideComments>
            <Paper className="pl-20 pr-20 pt-20 pb-20 mb-30" elevation={0}>
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
                <div className="d-flex mb-10 mt-10">
                    <Typography style={{ fontWeight: 'bold', color: '#35AB66' }} className="mr-15">
                        +22
                    </Typography>
                    <Typography>2 подписчика</Typography>
                </div>
                <Typography>На проекте с 10 июня 2020</Typography>

                <Tabs className="mt-20" value={0} indicatorColor="primary" textColor="primary">
                <Tab label="Статьи" />
                <Tab label="Комментарии" />
                <Tab label="Закладки" />
                </Tabs>
            </Paper>
            <div className="d-flex align-start">
                <div className="mr-20 flex">
                <Post />
                </div>
                <Paper style={{ width: 300 }} className="p-20 mb-20" elevation={0}>
                <b>Подписчики</b>
                <div className="d-flex mt-15">
                    <Avatar
                    className="mr-10"
                    src="https://sun9-31.userapi.com/impg/pSpPka9PTroqI_aYoQqAr1qAovXI7GAEh_SI2Q/4FxGmI6wVFA.jpg?size=757x757&quality=96&sign=6ca97a6cd1e8eae6e2d84151bd0a3d51&type=album"
                    />
                    <Avatar
                    className="mr-10"
                    src="https://sun9-78.userapi.com/impg/PFwtiVBwKhm4RoZZ_20xesd0LqzTZPgYsuWsow/EQb_GlEfxCI.jpg?size=958x958&quality=96&sign=609dd86336fb952fda9a2d939ea22709&type=album"
                    />
                </div>
                </Paper>
            </div>
        </MainLayout>
    )
}