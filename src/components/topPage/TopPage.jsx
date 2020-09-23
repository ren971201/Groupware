import React from 'react';

class TopPage extends React.Component {
    render() {
        return (
            <div className='top-page'>
                <div className='information'>
                    <h1 className='information-title'>お知らせ</h1>
                    <div className='information-item'>
                        <div className='information-item-title'>お知らせ</div>
                        <div className='information-item-item'>セキュリティ確認テスト実施のお願い(2Q)</div>
                        <div className='information-item-item'>・・・・・・</div>
                    </div>
                </div>
                <div className='event'>
                    <h1 className='event-title'>イベント</h1>
                    <div className='event-item'>
                        <div className='event-item-event'>
                            <div className='event-item-event-title'>イベント</div>
                            <div className='event-item-event-item'>ESマネージャ会議</div>
                            <div className='event-item-event-item'>システム1部勉強会(React)</div>
                            <div className='event-item-event-item'>システム1部S1勉強会(サキ)</div>
                            <div className='event-item-event-item'>若手教育(登チーム)振返り</div>
                        </div>
                        <div className='event-item-schedule'>
                            <div className='event-item-schedule-title'>日程</div>
                            <div className='event-item-schedule-item'>2020/9/27</div>
                            <div className='event-item-schedule-item'>2020/10/02</div>
                            <div className='event-item-schedule-item'>2020/10/08</div>
                            <div className='event-item-schedule-item'>2020/10/31</div>
                        </div>
                        <div className='event-item-place'>
                            <div className='event-item-place-title'>場所</div>
                            <div className='event-item-place-item'>本社ミーティングルーム4</div>
                            <div className='event-item-place-item'>東京オフィス来客用</div>
                            <div className='event-item-place-item'>サキ会議室</div>
                            <div className='event-item-place-item'>東京オフィス来客用</div>
                        </div>
                        <div className='event-item-start-time'>
                            <div className='event-item-start-time-title'>開始時刻</div>
                            <div className='event-item-start-time-item'>10:00</div>
                            <div className='event-item-start-time-item'>13:00</div>
                            <div className='event-item-start-time-item'>18:00</div>
                            <div className='event-item-start-time-item'>18:00</div>
                        </div>
                        <div className='event-item-end-time'>
                            <div className='event-item-end-time-title'>終了時刻</div>
                            <div className='event-item-end-time-item'>12:00</div>
                            <div className='event-item-end-time-item'>14:00</div>
                            <div className='event-item-end-time-item'>19:00</div>
                            <div className='event-item-end-time-item'>19:00</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopPage;