using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MvcWebApp.DomainModel;

namespace MvcWebApp.DAL
{
    public interface IMatchRepository : IDisposable
    {
        IEnumerable<Match> GetMatches();
        Match GetMatchByID(int matchID);
        void InsertMatch(Match match);
        void DeleteMatch(int matchID);
        void UpdateMatch(Match match);
        void Save();
    }
}
