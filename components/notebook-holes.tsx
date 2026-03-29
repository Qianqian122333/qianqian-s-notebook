export function NotebookHoles() {
  return (
    <div className="fixed left-0 top-0 bottom-0 z-40 w-8 md:w-12 flex flex-col items-center pt-20 gap-10 pointer-events-none">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-background border-2 border-primary/20 shadow-inner"
          style={{
            boxShadow: "inset 1px 1px 3px rgba(44, 24, 16, 0.15)",
          }}
        />
      ))}
    </div>
  );
}
