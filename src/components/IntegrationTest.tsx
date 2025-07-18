import { Button, Card } from 'antd';

const IntegrationTest = () => {
  return (
    <Card
      title="Tailwind + Ant Design 集成测试"
      className="max-w-md mx-auto mt-8 shadow-lg"
    >
      <div className="space-y-4">
        <p className="text-gray-700">
          这是一个验证Tailwind CSS和Ant Design集成的组件
        </p>
        <Button
          type="primary"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Ant Design按钮 + Tailwind样式
        </Button>
        <div className="p-4 bg-gray-100 rounded">
          <p className="text-sm text-gray-600">
            这个卡片使用了Ant Design的Card组件，同时应用了Tailwind CSS的样式类
          </p>
        </div>
      </div>
    </Card>
  );
};

export default IntegrationTest;
