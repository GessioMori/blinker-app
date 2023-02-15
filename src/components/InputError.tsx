export const InputError: React.FC<{ error: string }> = ({ error }) => {
  return (
    <div className="text-right text-sm font-medium text-red-400" role="alert">
      {error}
    </div>
  );
};
