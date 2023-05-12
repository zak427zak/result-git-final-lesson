import {Button, Col, Layout, Row} from 'antd';

export const Calculator = () => {
  const numberActions: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const mathActions: string[] = ['+', '-', '*', '/', '%'];


  return (
    <Layout style={{
      maxWidth: '550px',
      margin: '0 auto',
    }}>
      <Layout.Content>
        <Row>
          <Col span={20}>
            <Row gutter={[8, 8]}>
              {numberActions.map(n => (
                <Col span={7} key={n}>
                  <Button shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
          <Col span={4}>
            <Row gutter={[8, 8]}>
              {mathActions.map(n => (
                <Col span={24} key={n}>
                  <Button shape={'circle'} size={'large'}>{n}</Button>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Layout.Content>
    </Layout>
  );
}
