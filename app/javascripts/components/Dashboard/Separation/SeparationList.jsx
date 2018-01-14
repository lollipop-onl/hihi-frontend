import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Table from '../Common/Table';

class SeparationList extends Component {
  render () {
    const data = this.props.separationData;

    return (
      <div>
        <div className="wrapper--margin">
          <Table
            data={data.separations ? data.separations
              .sort((a, b) => {
                if (a.separationId > b.separationId) return 1;
                if (a.separationId < b.separationId) return -1;
                return 0;
              })
              .map((item) => {
              const separation = data.abstract.separations.find(separation => separation.id === item.separationId);
              const notice = data.abstract.notices.find(notice => notice.id === item.noticeId);

              return [
                separation.name,
                notice ? notice.message : null,
                item.register,
                item.modifier,
                item.created,
                item.modified
              ];
            }) : []}
            header={[
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

SeparationList.propTypes = {
  separationData: PropTypes.object
};

function mapStateToProps (state) {
  return {
    separationData: state.dashboard.separationData
  };
}

export default connect(mapStateToProps, {
})(SeparationList);
