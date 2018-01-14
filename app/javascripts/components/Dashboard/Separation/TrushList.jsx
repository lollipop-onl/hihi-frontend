import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '../Common/Table';

class TrushList extends Component {
  render () {
    const data = this.props.separationData;

    return (
      <div>
        <div className="wrapper--margin">
          <Table
            data={data.trush ? data.trush.map((item) => {
              const separation = data.separations.find(separation => separation.id === item.separationId);
              const notice = data.abstract.notices.find(item => item.id === separation.noticeId);

              return [
                item.name,
                item.furigana,
                data.abstract.separations.find(item => item.id === separation.separationId).name,
                notice ? notice.message : null,
                item.register,
                item.modifier,
                item.created,
                item.modified
              ];
            }) : []}
            header={[
              { title: '名前' },
              { title: 'ふりがな' },
              { title: '分別方法' },
              { title: '注意事項' },
              { title: '登録者' },
              { title: '最終更新者' },
              { title: '登録日時' },
              { title: '最終更新日時' }
            ]}
          />
        </div>
      </div>
    )
  }
}

TrushList.propTypes = {
  separationData: PropTypes.object
};

function mapStateToProps (state) {
  return {
    separationData: state.dashboard.separationData
  };
}

export default connect(mapStateToProps, {
})(TrushList);
