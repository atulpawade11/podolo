export default function UserGreeting() {
    return (
      <div>
        <h2 className="text-xl font-semibold mb-2">Hello, Kevin</h2>
        <p className="text-sm text-gray-600 mb-6">
            From your account dashboard, you can easily check & view your{" "}
            <a href="#" className="text-yellow-500 hover:underline font-normal">Recent Orders</a>, manage your{" "}
            <a href="#" className="text-yellow-500 hover:underline font-normal">Shipping and Billing Addresses</a>{" "}
            and edit your <a href="#" className="text-yellow-500 hover:underline font-normal">Password</a> and{" "}
            <a href="#" className="text-yellow-500 hover:underline font-normal">Account Details</a>.
        </p>
      </div>
    );
  }
  