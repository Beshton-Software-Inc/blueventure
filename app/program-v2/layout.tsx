export default function ProgramV2Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <style>{`#global-header, #global-footer { display: none !important; }`}</style>
      {children}
    </>
  );
}
