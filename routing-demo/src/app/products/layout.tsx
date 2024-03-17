// export const metadata = {
//   title: "About Mohammad",
//   description: "It is from the deepest level.",
// };

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Product Layout</h1>
      {children}
    </div>
  );
}
