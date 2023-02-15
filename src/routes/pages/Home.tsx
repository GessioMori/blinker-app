import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateLinkModal } from "../../components/CreateLinkModal";
import { Header } from "../../components/Header";
import { PrivateLinksContainer } from "../../components/PrivateLinksContainer";
import { useAuth } from "../../hooks/user/useAuth";

export const Home = () => {
  const navigate = useNavigate();
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const { isError, isLoading } = useAuth();

  if (isError) {
    navigate("/login", { replace: true });
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {isCreateLinkModalOpen && (
        <CreateLinkModal onClose={() => setIsCreateLinkModalOpen(false)} />
      )}

      <div className="w-full">
        <Header />
        <button
          onClick={() => setIsCreateLinkModalOpen(true)}
          className={"bg-slate-600"}
        >
          Create link
        </button>
        <div className="flex w-full flex-col items-center">
          <PrivateLinksContainer />
        </div>
      </div>
    </>
  );
};
